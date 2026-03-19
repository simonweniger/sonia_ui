import type {HeroUIToastOptions} from "./toast-queue";
import type {Meta} from "@storybook/react";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";

import {Toast, toast} from "./index";

interface ToastStoryProps extends Omit<HeroUIToastOptions, "variant"> {}

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
    <Flex h="full" maxW="xl" direction="column" align="center" justify="center">
      <Toast.Root />
      <Flex w="full" wrap="wrap" align="center" justify="center" gap="4">
        <Button
          style={{color: "var(--colors-fg-muted)"}}
          size="sm"
          variant="ghost"
          onClick={() => {
            toast("You have been invited to join a team", {
              description: "Bob sent you an invitation to join HeroUI team",
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
          style={{color: "var(--colors-fg-success)"}}
          size="sm"
          variant="ghost"
          onClick={() =>
            toast.success("You have upgraded your plan", {
              description: "You can continue using HeroUI Chat",
            })
          }
        >
          Success toast
        </Button>
        <Button
          style={{color: "var(--colors-fg-warning)"}}
          size="sm"
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
    <Flex h="full" maxW="xl" direction="column" align="center" justify="center">
      <Toast.Root />
      <Flex w="full" wrap="wrap" align="center" justify="center" gap="4">
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
    <Flex h="full" maxW="xl" direction="column" align="center" justify="center">
      <Toast.Root />
      <Flex w="full" wrap="wrap" align="center" justify="center" gap="4">
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
    <Flex h="full" maxW="xl" direction="column" align="center" justify="center">
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
    <Flex h="full" maxW="xl" direction="column" align="center" justify="center">
      <Toast.Root />
      <Flex w="full" wrap="wrap" align="center" justify="center" gap="4">
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
    <Flex h="full" maxW="2xl" direction="column" align="center" justify="center" gap="6">
      <Toast.Root />

      {/* Toast Buttons */}
      <Flex w="full" wrap="wrap" align="center" justify="center" gap="4">
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
      <Flex w="full" direction="column" gap="2">
        <Flex align="center" justify="space-between">
          <Text fontSize="sm" fontWeight="medium">Closed History</Text>
          {closedHistory.length > 0 && (
            <Button
              style={{height: "24px", fontSize: "12px"}}
              size="sm"
              variant="ghost"
              onClick={() => setClosedHistory([])}
            >
              Clear
            </Button>
          )}
        </Flex>
        <Box
          minH="120px"
          display="flex"
          flexDirection="column"
          gap="2"
          rounded="lg"
          borderWidth="1px"
          borderColor="border"
          bg="bg.panel"
          p="4"
        >
          {closedHistory.length === 0 ? (
            <Text fontSize="sm" color="fg.muted">No toasts closed yet. Try closing one above!</Text>
          ) : (
            closedHistory.map((item, index) => (
              <Flex
                key={`${item.time}-${index}`}
                align="start"
                justify="space-between"
                gap="3"
                rounded="md"
                borderWidth="1px"
                borderColor="border"
                bg="bg"
                px="3"
                py="2"
                fontSize="sm"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <Box flex="1">
                  <Text as="span" fontWeight="medium">{item.message}</Text>
                  <Text as="span" ml="2" fontSize="xs" color="fg.muted">({item.time})</Text>
                </Box>
                <Flex
                  flexShrink={0}
                  h="5"
                  w="5"
                  align="center"
                  justify="center"
                  rounded="full"
                  bg="success.muted"
                  color="fg.success"
                >
                  <svg
                    style={{width: "12px", height: "12px"}}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
