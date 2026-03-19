import type {Meta, StoryObj} from "@storybook/react";

import {Box, Text} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";
import {Link} from "../link";
import {Spinner} from "../spinner";

import {InputOTP, REGEXP_ONLY_CHARS} from "./index";

const meta: Meta<typeof InputOTP> = {
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    isInvalid: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
  },
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/InputOTP",
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: (args) => (
    <Box display="flex" w="280px" flexDirection="column" gap="2">
      <Box display="flex" flexDirection="column" gap="1">
        <Label>Verify account</Label>
        <Text fontSize="sm" color="fg.muted">We&apos;ve sent a code to a****@gmail.com</Text>
      </Box>
      <InputOTP {...args} maxLength={6}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
      <Box display="flex" alignItems="center" gap="5px" px="1" pt="1">
        <Text fontSize="sm" color="fg.muted">Didn&apos;t receive a code?</Text>
        <Link color="fg" textDecoration="underline">
          Resend
        </Link>
      </Box>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="6">
      <Box display="flex" flexDirection="column" gap="2">
        <Label>Primary variant</Label>
        <InputOTP maxLength={6} variant="primary">
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
      </Box>
      <Box display="flex" flexDirection="column" gap="2">
        <Label>Secondary variant</Label>
        <InputOTP maxLength={6} variant="secondary">
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
      </Box>
    </Box>
  ),
};

export const FourDigits: Story = {
  render: (args) => (
    <Box display="flex" w="280px" flexDirection="column" gap="2">
      <Label>Enter PIN</Label>
      <InputOTP {...args} maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>
    </Box>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Box display="flex" w="280px" flexDirection="column" gap="2">
      <Label>Verify account</Label>
      <Description>Code verification is currently disabled</Description>
      <InputOTP {...args} isDisabled maxLength={6}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
    </Box>
  ),
};

export const WithPattern: Story = {
  render: (args) => (
    <Box display="flex" w="280px" flexDirection="column" gap="2">
      <Label>Enter code (letters only)</Label>
      <Description>Only alphabetic characters are allowed</Description>
      <InputOTP {...args} maxLength={6} pattern={REGEXP_ONLY_CHARS}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
    </Box>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <Box display="flex" w="280px" flexDirection="column" gap="2">
        <Label>Verify account</Label>
        <InputOTP {...args} maxLength={6} value={value} onChange={setValue}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
        <Description>
          {value.length > 0 ? (
            <>
              Value: {value} ({value.length}/6) •{" "}
              <button
                style={{fontWeight: 500, color: "var(--colors-fg)", textDecoration: "underline"}}
                onClick={() => setValue("")}
              >
                Clear
              </button>
            </>
          ) : (
            "Enter a 6-digit code"
          )}
        </Description>
      </Box>
    );
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const code = formData.get("code");

      if (code !== "123456") {
        setIsInvalid(true);

        return;
      }

      setIsInvalid(false);
      setValue("");

      alert("Code verified successfully!");
    };

    const handleChange = (val: string) => {
      setValue(val);
      setIsInvalid(false);
    };

    return (
      <Box display="flex" w="280px" flexDirection="column" gap="2">
        <Form style={{display: "flex", flexDirection: "column", gap: "8px"}} onSubmit={onSubmit}>
          <Label>Verify account</Label>
          <Description>Hint: The code is 123456</Description>
          <InputOTP
            {...args}
            aria-describedby={isInvalid ? "code-error" : undefined}
            isInvalid={isInvalid}
            maxLength={6}
            name="code"
            value={value}
            onChange={handleChange}
          >
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
          <Text as="span" className="field-error" data-visible={isInvalid} id="code-error">
            Invalid code. Please try again.
          </Text>
          <Button isDisabled={value.length !== 6} type="submit">
            Submit
          </Button>
        </Form>
      </Box>
    );
  },
};

export const OnComplete: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    const [isComplete, setIsComplete] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleComplete = (code: string) => {
      setIsComplete(true);
      // eslint-disable-next-line no-console
      console.log("Code complete:", code);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setValue("");
        setIsComplete(false);
      }, 2000);
    };

    return (
      <Form style={{display: "flex", width: "280px", flexDirection: "column", gap: "8px"}} onSubmit={handleSubmit}>
        <Label>Verify account</Label>
        <InputOTP
          {...args}
          maxLength={6}
          value={value}
          onComplete={handleComplete}
          onChange={(val) => {
            setValue(val);
            setIsComplete(false);
          }}
        >
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
        <Button
          style={{marginTop: "8px", width: "100%"}}
          isDisabled={!isComplete}
          type="submit"
          variant="solid"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </Button>
      </Form>
    );
  },
};

export const FormExample: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (value.length !== 6) {
        setError("Please enter all 6 digits");

        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        if (value === "123456") {
          // eslint-disable-next-line no-console
          console.log("Code verified successfully!");
          setValue("");
        } else {
          setError("Invalid code. Please try again.");
        }
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <Form style={{display: "flex", width: "280px", flexDirection: "column", gap: "16px"}} onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="2">
          <Label>Two-factor authentication</Label>
          <Description>Enter the 6-digit code from your authenticator app</Description>
          <InputOTP
            {...args}
            isInvalid={!!error}
            maxLength={6}
            value={value}
            onChange={(val) => {
              setValue(val);
              setError("");
            }}
          >
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
          <Text as="span" className="field-error" data-visible={!!error} id="code-error">
            {error}
          </Text>
        </Box>
        <Button
          style={{width: "100%"}}
          isDisabled={value.length !== 6}
          type="submit"
          variant="solid"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Verifying...
            </>
          ) : (
            "Verify"
          )}
        </Button>
        <Box display="flex" alignItems="center" justifyContent="center" gap="1">
          <Text fontSize="sm" color="fg.muted">Having trouble?</Text>
          <Link fontSize="sm" color="fg" textDecoration="underline">
            Use backup code
          </Link>
        </Box>
      </Form>
    );
  },
};
