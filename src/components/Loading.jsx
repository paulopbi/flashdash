import { Hourglass } from "react-loader-spinner";

function Loading() {
  return (
    <div className="relative w-full h-screen z-10">
      <Hourglass
        visible={true}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        colors={["#71aeff", "#71c8ff"]}
      />
    </div>
  );
}

export default Loading;
