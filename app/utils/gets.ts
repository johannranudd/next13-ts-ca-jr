export async function getData() {
  try {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop`, {
      next: { revalidate: 30 },
    });
    if (res.ok) {
      return await res.json();
    } else {
      console.error(res.status, "An error occured in getData()");
      return await res.json();
    }
  } catch (error) {
    console.error(error, "An error occured in getData()");
  }
}
export async function getSingleProduct(id: string) {
  try {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`, {
      next: { revalidate: 30 },
    });
    if (res.ok) {
      return await res.json();
    } else {
      console.error(res.status, "An error occured in getSingleProduct()");
      return await res.json();
    }
  } catch (error) {
    console.error(error, "An error occured in getSingleProduct()");
  }
}
