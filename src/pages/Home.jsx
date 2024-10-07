import { Speciality } from "../components/Speciality";
import { TopDoctors } from "../components/TopDoctors";
import { Banner } from "../components/Banner";
import { Mainsection } from "../components/Mainsection";
export const Home = () => {
  return (
    <>
      <Mainsection />
      <Speciality />
      <TopDoctors />
      <Banner />
    </>
  );
};
