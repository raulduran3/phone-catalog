import axios from "axios";
import { url, fetchPhones } from "./index";

jest.mock("axios");

describe("fetchPhones", () => {
  it("should return phones list", async () => {
    const phones = [
      {
        _id: "62297f794117ef05628eb855",
        name: "Galaxy",
        manufacturer: "Google",
        description: "A very nice phone.",
        color: "Black",
        price: 999,
        screen: "10 x 10",
        processor: "A10",
        ram: "50GB",
        createdAt: "2022-03-10T02:19:39.317Z",
        __v: 0,
      },
      {
        _id: "622982a44117ef05628eb866",
        name: "iPhone X",
        manufacturer: "Apple",
        description: "What a nice phone.",
        color: "Black",
        price: 1000,
        screen: "10 x 10",
        processor: "M1",
        ram: "32 GB",
        createdAt: "2022-03-10T02:19:39.317Z",
        __v: 0,
      },
    ];
    axios.get.mockResolvedValueOnce(phones);
    const result = await fetchPhones();
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result).toEqual(phones);
  });
});
