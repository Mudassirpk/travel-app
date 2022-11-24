async function follow(id_to: string, id_from: string) {
  let response;
  const tokenAndEmail = localStorage.getItem("tapp_eAt");
  if (tokenAndEmail) {
    const token = JSON.parse(tokenAndEmail).token;
    response = await fetch("/api/follow/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "x-auth-token": token,
      },
      body: JSON.stringify({ id_from: id_from, id_to: id_to }),
    });
  }

  return response;
}

export default follow;
