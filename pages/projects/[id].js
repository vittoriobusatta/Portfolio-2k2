import React from "react";

function Projects({ id }) {
  console.log(id);
  return (
    <section>
      Map
    </section>
  );
}

export default Projects;

export async function getStaticProps({ params }) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const { id } = params;

  return {
    props: {
      id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}


