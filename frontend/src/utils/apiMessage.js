export function getApiMessage(error, fallback) {
  const data = error?.response?.data;

  if (!data) {
    return fallback;
  }

  if (typeof data === "string") {
    return data;
  }

  if (data.detail) {
    return data.detail;
  }

  if (data.message) {
    return data.message;
  }

  const messages = Object.entries(data).flatMap(([field, value]) => {
    if (Array.isArray(value)) {
      return value.map((item) => `${field}: ${item}`);
    }

    if (typeof value === "string") {
      return `${field}: ${value}`;
    }

    return [];
  });

  return messages.length ? messages.join(" ") : fallback;
}
