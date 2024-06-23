import { Canvas } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import Monkey3d from "./Monkey";
import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

const positions = [
  {
    name: "Full Stack Developer",
    color: "#3B92E4",
  },
  {
    name: "System Administrator",
    color: "#E270A1",
  },
];

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView, setPage]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  
  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>klpod221</Name>
        <Position>
          {positions.map((position, index) => (
            <div
              key={index}
              data-index={index}
              className={`text ${index === 0 ? "first" : "second"}`}
              aria-label={position.name}
              style={{ color: position.color }}
            >
              {produceSpans(position.name)}
            </div>
          ))}
        </Position>
      </TextContainer>
      <DogContainer>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <Monkey3d />
        </Canvas>
      </DogContainer>
    </HomeWrapper>
  );
};

export default Home;
