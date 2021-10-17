import Layout from "../../../components/layout admin";
import { Image } from "antd";

const Project = (props) => {
  const { data } = props;

  console.log(data);
  return (
    <Layout>
      <div className="">
        <h3>Project</h3>
        {data.data.map((e) => {
          return (
            <Image
              style={{ objectFit: "contain" }}
              placeholder={true}
              width={200}
              height={200}
              src={`https://docs.google.com/uc?id=${e.img_id}`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/portfolio`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default Project;
