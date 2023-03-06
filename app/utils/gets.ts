export async function getData() {
  try {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop`, {
      next: { revalidate: 20 },
    });
    if (res.ok) {
      return await res.json();
    } else {
      // todo: return error here
      console.error(res.status, "An error occured in getData()");
      return res.json();
    }
  } catch (error) {
    console.error(error, "An error occured in getData()");
  }
}
