import React, { useContext, useEffect, useState, forwardRef } from "react";
import Container from "../components/Container";
import { DetailsContext, ModalContext } from "../context/CustomContext";
import json from "../assets/projectData.json";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import FlipMove from "react-flip-move";
import Box from "@mui/material/Box";

const Buttons = ({ onClick = (index) => {} }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const btns = [
    {
      id: "all",
      label: "all",
      selected: true,
    },
    {
      id: "web",
      label: "Web-Based",
      selected: true,
    },
    {
      id: "desktop",
      label: "Desktop App",
      selected: false,
    },
    {
      id: "mobile",
      label: "Mobile App",
      selected: false,
    },
  ];

  useEffect(() => {
    onClick(value);
  }, [value]);

  return (
    <div className='w-full flex justify-center mb-5 items-center'>
      <Tabs
        textColor='inherit'
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons={true}
        allowScrollButtonsMobile
      >
        {btns.map((btn, i) => {
          return <Tab key={i} label={btn.label} />;
        })}
      </Tabs>
    </div>
  );
};

const Item = forwardRef(
  (
    { title, description, image, url, video, language, empty, url_label },
    ref
  ) => {
    const context = useContext(ModalContext);
    const detailsContext = useContext(DetailsContext);

    const openDetailsModalEvent = () => {
      detailsContext.setValue((curr) => {
        const data = {
          title: title,
          description: description,
          image: image,
          url: url,
          video: video,
          language: language,
          url_label: url_label,
        };
        return {
          ...curr,
          state: true,
          data: data,
        };
      });
    };

    const openEventHandler = () => {
      const data = {
        title: title,
        description: description,
        image: image,
        url: url,
        video: video,
        language: language,
      };

      context.setValue((current) => {
        return {
          ...current,
          state: true,
          data: data,
        };
      });
    };

    return (
      <div
        ref={ref}
        className='h-48 backdrop-blur-sm bg-[rgba(0,136,136,0.6)] text-slate-600 p-2 rounded-lg flex items-center justify-center flex-col gap-y-1 '
      >
        <div className='w-full text-center px-3'>
          <h1
            title={title}
            className='text-white text-xl font-roboto-bold truncate'
          >
            {title}
          </h1>
        </div>
        {!empty && (
          <div className='flex gap-x-1'>
            <button
              onClick={openDetailsModalEvent}
              className='bg-[rgb(0,136,136)] hover:bg-[rgb(0,150,150)] select-none shadow-md text-white font-plasto px-5 py-2 rounded-md'
            >
              DETAILS
            </button>
            {!(!video && image.length === 0) && (
              <button
                onClick={openEventHandler}
                className='bg-[rgb(0,136,136)] hover:bg-[rgb(0,150,150)] select-none shadow-md text-white font-plasto px-5 py-2 rounded-md'
              >
                DEMO
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

function Projects() {
  const [datas, setDatas] = useState(json.data);

  const clickEventHandler = (index) => {
    switch (index) {
      case 0:
        setDatas(json.data);
        break;
      case 1:
        setDatas(() => {
          return json.data.filter((data) => {
            return data.type === "website";
          });
        });
        break;
      case 2:
        setDatas(() => {
          return json.data.filter((data) => {
            return data.type === "desktop";
          });
        });
        break;
      case 3:
        setDatas(() => {
          return json.data.filter((data) => {
            return data.type === "mobile";
          });
        });
        break;
    }
  };

  return (
    <Container className='project_page py-10 min-h-screen'>
      <h1 className='text-center text-6xl text-white pb-10 font-popping'>
        My <span className='text-cyan'>Projects</span>
      </h1>
      <div className='w-full flex flex-col'>
        <Buttons onClick={clickEventHandler} />
        <FlipMove
          enterAnimation='elevator'
          leaveAnimation='elevator'
          className='w-full grid gap-6'
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
          }}
        >
          {datas.length === 0 && <Item empty key={1000} title='Empty' />}
          {datas.map((data, i) => (
            <Item key={data.id} {...data} />
          ))}
        </FlipMove>
      </div>
    </Container>
  );
}

export default Projects;
