export async function getData() {
  try {
    const res = await fetch("https://api.noroff.dev/api/v1/online-shop", {
      next: { revalidate: 10 },
    });
    // console.log(res.ok);
    if (res.ok) {
      return await res.json();
    } else {
      // todo: return error here
      console.error(res.status, "An error occured in getData()");
    }
    // console.log(data.errors[0].message);
    // if (res.statusCode >= 200 || res.statusCode < 300) {
    //   console.log(res);
    // }
  } catch (error) {
    console.error(error, "An error occured in getData()");
  }
}
