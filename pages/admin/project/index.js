import Layout from "../../../components/layout admin";
import Image from "antd";
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
            <LazyLoad key={e.id} height={200} offset={100}>
              <Image
                style={{ objectFit: "contain" }}
                width={200}
                height={200}
                // src={`https://docs.google.com/uc?id=${e.img_id}`}
                src={e.url}
                alt=""
              />
            </LazyLoad>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return {
    props: {
      projectData: data,
    }, // will be passed to the page component as props
  };
}

export default Project;
