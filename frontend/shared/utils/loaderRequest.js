export const loaderRequest = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    // React Router'ın useRouteError() ile yakalayabilmesi için Response objesi fırlatıyoruz:
    throw new Response(
      JSON.stringify({
        message: response.statusText || "Something went wrong!",
      }),
      {
        status: response.status,
        statusText: response.statusText,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  const data = await response.json();
  return data;
};
