module.exports = {
  theme: {
    extend: {
      keyframes: {
        "zoom-in-center": {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
            translate: "-50% -50%",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
            translate: "-50% -50%",
          },
        },
        "zoom-out-center": {
          "0%": { transform: "scale(1)", opacity: "1", translate: "-50% -50%" },
          "100%": {
            transform: "scale(0.5)",
            opacity: "0",
            translate: "-50% -50%",
          },
        },
      },
      animation: {
        "zoom-in-center": "zoom-in-center 0.3s ease-out",
        "zoom-out-center": "zoom-out-center 0.25s ease-in",
      },
    },
  },
};
