import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "qcq7it008v72",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      //   console.log(response.items);
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, projects };
};
