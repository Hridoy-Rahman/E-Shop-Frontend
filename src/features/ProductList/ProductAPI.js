// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async(resolve) =>{
    const response = await fetch('https://mocki.io/v1/646e4af6-5191-4ad8-949a-08b0f45602f4');
    const data = await  response.json();
    resolve({data});
  }
  );
}
