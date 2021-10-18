import Layout from "../../../components/layout admin";
import { Image } from "antd";

const Project = (props) => {
  const { projectData } = props;

  console.log(projectData);
  return (
    <Layout>
      <div className="">
        <h3>Project</h3>
        {projectData.map((e) => {
          return (
            <Image
              key={e.id}
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
              src={`https://docs.google.com/uc?id=${e.url}`}
              alt=""
            />
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return {
    props: {
      projectData: data,
    }, // will be passed to the page component as props
  };
}

export default Project;
