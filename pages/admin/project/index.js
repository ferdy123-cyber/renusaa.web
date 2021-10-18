import Layout from "../../../components/layout admin";
import Image from "next/image";
// import LazyLoad from "react-lazyload";

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
              style={{ objectFit: "contain" }}
              width={350}
              height={350}
              src={`https://docs.google.com/uc?id=${e.img_id}`}
              alt=""
              placeholder="blur"
            />
          );
        })}
      </div>
    </Layout>
  );
};

export async function getData() {
  const res = await fetch("https://app.ferdyfian.xyz/portfolio");
  const data = await res.json();

  return {
    props: {
      projectData: data,
    }, // will be passed to the page component as props
  };
}

export default Project;
