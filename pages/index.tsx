import MainPanel from "../components/MainPanel";
import Header from "../components/Header";

interface dataName {
  name: string;
}

interface dataProps {
  location: dataName;
}

interface Props {
  data: dataProps;
  handleLocationPopup: () => void;
}

const Home: React.FC<Props> = ({ data, handleLocationPopup }) => {
  return (
    <>
      <Header data={data} handleLocationPopup={handleLocationPopup} />
      <MainPanel data={data} />
    </>
  );
};

export default Home;
