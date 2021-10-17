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
              src={`https://docs.google.com/uc?id=${e.img_id}`}
              alt=""
            />
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/portfolio`);
  const data = await res.json();

  return {
    props: {
      projectData: data.data,
    }, // will be passed to the page component as props
  };
}

export default Project;
