export const setColor = (value) => {
  if (value === "Temple") {
    return "bg-purple-600";
  } else if ((value === "Community") | (value === "Discovery")) {
    return "bg-blue-600";
  } else {
    return "bg-green-600";
  }
};
