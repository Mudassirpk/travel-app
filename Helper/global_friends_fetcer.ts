const g_f_fetcher = async function (list: Array<string>) {
  const emailAndtoken = localStorage.getItem("tapp_eAt");
  const { token } = JSON.parse(emailAndtoken as string);
  const response = await fetch("/api/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-auth-token": token,
    },
    body: JSON.stringify({ friends: list }),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};

export default g_f_fetcher;
