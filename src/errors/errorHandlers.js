export default function errorHandler(err) {
  if (err.code === "ENOENT") {
    throw new Error("File not found");
  } else {
    return "Application error";
  }
}
