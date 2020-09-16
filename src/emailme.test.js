// async/await can be used.
// it('works with async/await', async () => {
//   expect.assertions(1);
//   const data = await user.getUserName(4);
//   expect(data).toEqual('Mark');
// });
// async/await can also be used with `.resolves`.
import fetch from "node-fetch";
import { send } from "./emailme";

jest.mock("node-fetch");
const { Response } = jest.requireActual("node-fetch");

const templateParams = {
  date: "",
  email: "example@test.ru",
  phone: "+79000000000",
  fullname: "test",
};
// it("works with async/await and resolves", async () => {
//   await expect(
//     send(
//       "http://127.0.0.1/api/send/mail/",
//       "6b74dc17-01c7-40ca-aa37-6633feb140c7",
//       [templateParams]
//     )
//   ).resolves.toBe(true);
// });
test("createUser calls fetch with the right args and returns the user id", async () => {
  fetch.mockReturnValue(Promise.resolve(new Response("4")));

  const resultCode = await send();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "http://127.0.0.1/api/send/mail/e2337809-870b-45b2-a5d1-7282a5c0811c",
    {
      method: "POST",
      body: JSON.stringify(templateParams),
    }
  );
  expect(resultCode).toBe("true");
});

// test('Success case for send form:', () => {
//   expect(emailme.sendForm("http://127.0.0.1/api/send/mail/",
//   "d7f067ec-c741-4f8d-a27a-412e63029f6f")).toBe(3);
// });
// test('Failure case for send form:', () => {
//     expect(emailme.sendForm("http://127.0.0.1/api/send/mail/",
//     "d7f067ec-c741-4f8d-a27a-412e63029f6f")).toBe(3);
// });
// var templateParams = {
//     select: "form",
//     input: "select",
// };
// test('Success case for send:', () => {
//     expect(emailme.sendForm("http://127.0.0.1/api/send/mail/",
//     "d7f067ec-c741-4f8d-a27a-412e63029f6f", templateParams)).toBe(3);
//   });
//   test('Failure case for send:', () => {
//       expect(emailme.sendForm("http://127.0.0.1/api/send/mail/",
//       "d7f067ec-c741-4f8d-a27a-412e63029f6f", templateParams)).toBe(3);
//     });
