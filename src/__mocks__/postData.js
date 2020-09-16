// const answers = {
//   1: { success: true },
// }
// export default function postData(url, data) {
//   return new Promise((resolve, reject) => {
//     process.nextTick(() =>
//         ? resolve(answers[success])
//         : reject({
//             error: 'error',
//           }),
//     );
//   });
// }
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }