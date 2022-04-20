import styles from "../styles/Home.module.scss";
import MainPanel from "../components/MainPanel";
import Header from "../components/Header";

export default function Home({ data, handleLocationPopup }) {
  console.log(data);

  return (
    <>
      <Header data={data} handleLocationPopup={handleLocationPopup} />
      <MainPanel data={data} />
    </>
  );
}
