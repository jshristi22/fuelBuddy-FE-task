import SignUp from "../pages/SignUp.vue";

export default {
  title: "SignUp",
  component: SignUp,
};

const Template = (args: any) => ({
  components: { SignUp },
  setup() {
    return {
      args,
    };
  },
  template: '<SignUp v-bind="args"/>',
});

export const Primary = Template.bind({});

// import SignUp from "../views/Login.vue";

// export default {
//   title: "Login",
//   component: Login,
// };

// const Template = (args: any) => ({
//   components: { Login },
//   setup() {
//     return { args };
//   },
//   template: '<Login v-bind="args" />',
// });

// export const Primary = Template.bind({});
