import Layout from "../../../components/layout admin";
import { Image } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://app.ferdyfian.xyz/portfolio")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const getData = () => {};

  console.log(data);
  return (
    <Layout>
      <div className="">
        <h3>Project</h3>
        {data.map((e) => {
          return (
            // <Image
            //   key={e.id}
            //   style={{ objectFit: "contain" }}
            //   width={200}
            //   height={200}
            //   src={`https://docs.google.com/uc?id=${e.img_id}`}
            //   alt=""
            // />
            <LazyLoadImage
              key={e.id}
              style={{ objectFit: "contain" }}
              alt=""
              height={350}
              src={`https://docs.google.com/uc?id=${e.img_id}`} // use normal <img> attributes as props
              width={350}
              effect="blur"
            />
          );
        })}
      </div>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch("https://app.ferdyfian.xyz/portfolio");
//   const data = await res.json();

//   return {
//     props: {
//       projectData: data,
//     }, // will be passed to the page component as props
//   };
// }

export default Project;
