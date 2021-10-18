import Layout from "../../../components/layout admin";
import { Image } from "antd";
import LazyLoad from "react-lazyload";

const Project = (props) => {
  const { projectData } = props;

  console.log(projectData);
  return (
    <Layout>
      <div className="">
        <h3>Project</h3>
        {projectData.map((e) => {
          return (
            <LazyLoad key={e.id} height={200} offset={100} placeholder={true}>
              <Image
                style={{ objectFit: "contain" }}
                width={200}
                height={200}
                src={`https://docs.google.com/uc?id=${e.img_id}`}
                alt=""
              />
            </LazyLoad>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/portfolio");
  const data = await res.json();

  return {
    props: {
      projectData: data,
    }, // will be passed to the page component as props
  };
}

export default Project;
