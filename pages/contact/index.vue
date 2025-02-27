<template>
  <div>
    <div class="h-[90vh] flex flex-col bg-black uk-light overflow-auto">
      <div class="flex-1 flex flex-col">
        <div class="flex-grow-[8] flex flex-col p-8">
          <!-- <div class="w-full h-35 flex justify-center pt-10">
          <p class="text-center border-1 w-96 h-18 text-6xl font-bold">CONTACT</p>
        </div> -->
          <div class="flex flex-col justify-center items-center">
            <p
              class="text-center w-96 h-18 text-6xl font-bold uk-animation-fade"
            >
              CONTACT
            </p>
            <div class="w-full flex justify-center items-center">
              <!-- form -->
              <div class="w-[50%] h-[95%] rounded-md">
                <form
                  class="uk-form-stacked uk-animation-slide-left"
                  @submit.prevent="handleSubmit"
                >
                  <div class="mb-2">
                    <div class="uk-form-controls">
                      <input
                        class="uk-input"
                        id="form-stacked-text"
                        type="text"
                        placeholder="Name"
                        name="name"
                        v-model="name"
                      />
                      <span
                        class="text-red-500 text-sm block min-h-[1.25rem]"
                        :class="{ invisible: !nameError, visible: nameError }"
                      >
                        {{ nameError || " " }}
                      </span>
                    </div>
                  </div>

                  <div class="mb-2">
                    <div class="uk-form-controls">
                      <input
                        class="uk-input"
                        id="form-stacked-email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        v-model="email"
                      />
                      <span
                        class="text-red-500 text-sm block min-h-[1.25rem]"
                        :class="{ invisible: !emailError, visible: emailError }"
                      >
                        {{ emailError || " " }}
                      </span>
                    </div>
                  </div>

                  <div class="mb-2">
                    <div class="uk-form-controls">
                      <textarea
                        class="uk-textarea"
                        id="form-stacked-textarea"
                        rows="5"
                        placeholder="Message"
                        name="message"
                        v-model="message"
                      ></textarea>
                      <span
                        class="text-red-500 text-sm block min-h-[1.25rem]"
                        :class="{
                          invisible: !messageError,
                          visible: messageError,
                        }"
                      >
                        {{ messageError || " " }}
                      </span>
                    </div>
                  </div>

                  <div class="mb-2">
                    <button class="uk-button uk-button-default" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
                <div
                  class="flex justify-center items-center gap-2"
                  uk-scrollspy="cls: uk-animation-slide-right; target: .slide-item; delay: 100; repeat: true"
                >
                  <a
                    href="https://line.me/ti/p/qawfI0LuNJ"
                    class="uk-icon-button no-underline slide-item"
                    style="text-decoration: none !important"
                    target="_blank"
                    >L</a
                  >

                  <a
                    href="#"
                    class="uk-icon-button slide-item"
                    uk-icon="icon: github"
                    @click="showNotification"
                  ></a>
                  <a
                    href="#"
                    class="uk-icon-button slide-item"
                    uk-icon="icon: facebook"
                    @click="showNotification"
                  ></a>
                  <a
                    href="#"
                    class="uk-icon-button slide-item"
                    uk-icon="icon: twitter"
                    @click="showNotification"
                  ></a>
                  <a
                    href="#"
                    class="uk-icon-button slide-item"
                    uk-icon="icon: instagram"
                    @click="showNotification"
                  ></a>
                </div>
                <div
                  class="uk-text-center w-full h-80 mt-8 overflow-hidden relative group uk-animation-fade"
                >
                  <div class="uk-inline-clip uk-transition-toggle uk-light">
                    <img
                      class="w-full h-full object-cover object-top cursor-pointer"
                      src="/public/map.png"
                      alt="map"
                    />
                  </div>
                  <a
                    class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-80 group-hover:bg-gray-900 transition-all duration-300 transform translate-y-5 group-hover:translate-y-0"
                    href="#modal-center"
                    uk-toggle
                  >
                    <span
                      class="uk-icon-button text-10xl"
                      uk-icon="icon: eye"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-center" class="uk-flex-top uk-light hidden" uk-modal>
      <div
        class="uk-modal-dialog uk-modal-body mb-2-auto-vertical uk-width-1-1 uk-height-1-1"
        style="background-color: black"
      >
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div
          class="uk-width-1-1 uk-height-1-1 p-12 flex justify-center items-center"
        >
          <img src="/public/map.png" alt="map" class="w-[90%] h-[90%]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { useField } from "vee-validate";
import * as yup from "yup";

UIkit.use(Icons);

const {
  value: name,
  errorMessage: nameError,
  validate: validateName,
  resetField: resetName,
} = useField("name", yup.string().required("Name is required"));
const {
  value: email,
  errorMessage: emailError,
  validate: validateEmail,
  resetField: resetEmail,
} = useField(
  "email",
  yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\./, "Invalid email format")
    .required("Email is required")
);
const {
  value: message,
  errorMessage: messageError,
  validate: validateMessage,
  resetField: resetMessage,
} = useField("message", yup.string().required("Message is required"));

const handleSubmit = async () => {
  const isNameValid = await validateName();
  const isEmailValid = await validateEmail();
  const isMessageValid = await validateMessage();

  if (isNameValid.valid && isEmailValid.valid && isMessageValid.valid) {
    console.log(isEmailValid, isMessageValid, isNameValid);
    try {
      const response = await fetch("https://formspree.io/f/mbldvwwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        UIkit.notification({
          message: "Message sent successfully!",
          status: "success",
        });

        // Reset form values after successful submission
        resetName();
        resetEmail();
        resetMessage();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      UIkit.notification({
        message: "Failed to send message. Please try again later.",
        status: "danger",
      });
    }
  }
};

const showNotification = () => {
  UIkit.notification({
    message: "Sorry, only available on Line",
  });
};
</script>
