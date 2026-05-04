import type {SoniaUIToastOptions} from "./toast-queue";
import type {Meta} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";

import {Toast, toast} from "./index";

interface ToastStoryProps extends Omit<SoniaUIToastOptions, "variant"> {}

const meta: Meta<ToastStoryProps> = {
  argTypes: {
    timeout: {
      control: "number",
    },
  },
  args: {
    timeout: undefined,
  },
  parameters: {
    layout: "centered",
  },
  title: "Components/Feedback/Toast",
};

export default meta;

const Template = () => {
  return (
    <Flex align="center" direction="column" h="full" justify="center" maxW="xl">
      <Toast.Root />
      <Flex align="center" gap="4" justify="center" w="full" wrap="wrap">
        <Button
          size="sm"
          style={{color: "var(--colors-fg-muted)"}}
          variant="ghost"
          onClick={() => {
            toast("You have been invited to join a team", {
              description: "Bob sent you an invitation to join SoniaUI team",
              indicator: <Icon icon="gravity-ui:persons" />,
              variant: "default",
            });
          }}
        >
          Default toast
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast.info("You have 2 credits left", {
              description: "Get a paid plan for more credits",
            })
          }
        >
          Accent toast
        </Button>
        <Button
          size="sm"
          style={{color: "var(--colors-fg-success)"}}
          variant="ghost"
          onClick={() =>
            toast.success("You have upgraded your plan", {
              description: "You can continue using SoniaUI Chat",
            })
          }
        >
          Success toast
        </Button>
        <Button
          size="sm"
          style={{color: "var(--colors-fg-warning)"}}
          variant="ghost"
          onClick={() =>
            toast.warning("You have no credits left", {
              description: "Upgrade to a paid plan to continue",
            })
          }
        >
          Warning toast
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast.danger("Storage is full", {
              description:
                "Remove files to release space. Adding more text to demonstrate longer content display",
              indicator: <Icon icon="gravity-ui:hard-drive" />,
            })
          }
        >
          Danger toast
        </Button>
      </Flex>
    </Flex>
  );
};

export const Default = {
  args: {},
  render: Template,
};

// Simple Toast - Title only, minimal examples
const SimpleToastTemplate = () => {
  return (
    <Flex align="center" direction="column" h="full" justify="center" maxW="xl">
      <Toast.Root />
      <Flex align="center" gap="4" justify="center" w="full" wrap="wrap">
        <Button size="sm" variant="outline" onClick={() => toast("Simple message")}>
          Default
        </Button>
        <Button size="sm" variant="outline" onClick={() => toast.success("Operation completed")}>
          Success
        </Button>
        <Button size="sm" variant="outline" onClick={() => toast.info("New update available")}>
          Info
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => toast.warning("Please check your settings")}
        >
          Warning
        </Button>
        <Button size="sm" variant="outline" onClick={() => toast.danger("Something went wrong")}>
          Error
        </Button>
      </Flex>
    </Flex>
  );
};

export const SimpleToast = {
  render: SimpleToastTemplate,
};

// Promise Toast - Async operations with loading/success/error states
const PromiseToastTemplate = () => {
  const uploadFile = (): Promise<{filename: string; size: number}> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({filename: "document.pdf", size: 1024}), 2000);
    });
  };

  const createEvent = (): Promise<never> => {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Network error. Please try again.")), 2000);
    });
  };

  const saveData = (): Promise<{count: number}> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({count: 42});
        } else {
          reject(new Error("Failed to save data"));
        }
      }, 2000);
    });
  };

  const fetchUser = (): Promise<{name: string; email: string}> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({name: "John Doe", email: "john@example.com"}), 2000);
    });
  };

  return (
    <Flex align="center" direction="column" h="full" justify="center" maxW="xl">
      <Toast.Root />
      <Flex align="center" gap="4" justify="center" w="full" wrap="wrap">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            toast.promise(uploadFile(), {
              error: "Failed to upload file",
              loading: "Uploading file...",
              success: (data) => `File ${data.filename} uploaded (${data.size}KB)`,
            });
          }}
        >
          Upload file
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            toast.promise(createEvent(), {
              error: (err) => err.message,
              loading: "Creating event...",
              success: "Event created",
            });
          }}
        >
          Create event (error)
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            toast.promise(saveData(), {
              error: (err) => err.message,
              loading: "Saving changes...",
              success: (data) => `Saved ${data.count} items`,
            });
          }}
        >
          Save data (random)
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            toast.promise(fetchUser(), {
              error: "Failed to fetch user",
              loading: "Loading user...",
              success: (data) => `Welcome back, ${data.name}!`,
            });
          }}
        >
          Fetch user
        </Button>
      </Flex>
    </Flex>
  );
};

export const PromiseToast = {
  render: PromiseToastTemplate,
};

// Custom Indicator - Custom or no indicators
const CustomIndicatorTemplate = () => {
  return (
    <Flex align="center" direction="column" h="full" justify="center" maxW="xl">
      <Toast.Root />
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast("Custom icon indicator", {
            indicator: <Icon icon="gravity-ui:star" />,
          })
        }
      >
        Custom indicator
      </Button>
    </Flex>
  );
};

export const CustomIndicator = {
  render: CustomIndicatorTemplate,
};

// Loading State - Manual loading toasts
const LoadingStateTemplate = () => {
  return (
    <Flex align="center" direction="column" h="full" justify="center" maxW="xl">
      <Toast.Root />
      <Flex align="center" gap="4" justify="center" w="full" wrap="wrap">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const loadingId = toast("Uploading file...", {
              description: "Please wait while we upload your file",
              isLoading: true,
              timeout: 0,
            });

            setTimeout(() => {
              toast.close(loadingId);
              toast.success("File uploaded", {
                description: "Your file has been uploaded successfully",
              });
            }, 3000);
          }}
        >
          Upload with loading
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const loadingId = toast("Processing payment...", {
              isLoading: true,
              timeout: 0,
            });

            setTimeout(() => {
              toast.close(loadingId);
              toast.success("Payment processed", {
                description: "Your payment has been processed successfully",
              });
            }, 2500);
          }}
        >
          Payment processing
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const loadingId = toast("Saving changes...", {
              isLoading: true,
              timeout: 0,
            });

            setTimeout(() => {
              toast.close(loadingId);
              toast.danger("Failed to save", {
                description: "Please try again",
              });
            }, 2000);
          }}
        >
          Loading to error
        </Button>
      </Flex>
    </Flex>
  );
};

export const LoadingState = {
  render: LoadingStateTemplate,
};

// With Callbacks - Timeout and onClose
const WithCallbacksTemplate = () => {
  const [closedHistory, setClosedHistory] = React.useState<Array<{message: string; time: string}>>(
    [],
  );

  const addToHistory = (message: string) => {
    const time = new Date().toLocaleTimeString();

    setClosedHistory((prev) => [{message, time}, ...prev].slice(0, 5));
  };

  return (
    <Flex align="center" direction="column" gap="6" h="full" justify="center" maxW="2xl">
      <Toast.Root />

      {/* Toast Buttons */}
      <Flex align="center" gap="4" justify="center" w="full" wrap="wrap">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast("File saved", {
              onClose: () => {
                addToHistory("File saved (closed after 3 seconds)");
              },
              timeout: 3000,
            })
          }
        >
          Custom timeout (3s)
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast("Changes saved", {
              onClose: () => {
                addToHistory("Changes saved (closed after 10 seconds)");
              },
              timeout: 10000,
            })
          }
        >
          Custom timeout (10s)
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast.success("Event created", {
              onClose: () => {
                addToHistory("Event created (closed after default timeout)");
              },
            })
          }
        >
          With onClose callback
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            toast("Important notification", {
              description: "This toast will stay until dismissed",
              onClose: () => {
                addToHistory("Important notification (manually closed)");
              },
              timeout: 0,
            })
          }
        >
          Persistent toast
        </Button>
      </Flex>

      {/* Closed History Panel */}
      <Flex direction="column" gap="2" w="full">
        <Flex align="center" justify="space-between">
          <Text fontSize="sm" fontWeight="medium">
            Closed History
          </Text>
          {closedHistory.length > 0 && (
            <Button
              size="sm"
              style={{height: "24px", fontSize: "12px"}}
              variant="ghost"
              onClick={() => setClosedHistory([])}
            >
              Clear
            </Button>
          )}
        </Flex>
        <Box
          bg="bg.panel"
          borderColor="border"
          borderWidth="1px"
          display="flex"
          flexDirection="column"
          gap="2"
          minH="120px"
          p="4"
          rounded="lg"
        >
          {closedHistory.length === 0 ? (
            <Text color="fg.muted" fontSize="sm">
              No toasts closed yet. Try closing one above!
            </Text>
          ) : (
            closedHistory.map((item, index) => (
              <Flex
                key={`${item.time}-${index}`}
                align="start"
                bg="bg"
                borderColor="border"
                borderWidth="1px"
                fontSize="sm"
                gap="3"
                justify="space-between"
                px="3"
                py="2"
                rounded="md"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <Box flex="1">
                  <Text as="span" fontWeight="medium">
                    {item.message}
                  </Text>
                  <Text as="span" color="fg.muted" fontSize="xs" ml="2">
                    ({item.time})
                  </Text>
                </Box>
                <Flex
                  align="center"
                  bg="success.muted"
                  color="fg.success"
                  flexShrink={0}
                  h="5"
                  justify="center"
                  rounded="full"
                  w="5"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{width: "12px", height: "12px"}}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Flex>
              </Flex>
            ))
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export const WithCallbacks = {
  render: WithCallbacksTemplate,
};
