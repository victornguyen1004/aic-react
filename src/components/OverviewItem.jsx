function OverviewItem (props) {
    return (
      <div
        className={`rounded-2xl ${props.bgColor} font-semibold ${props.textColor}`}
      >
        <div className="m-4 flex flex-col ">
          <span className="self-center text-3xl">{props.number}</span>
          <div className="flex flex-row items-center justify-evenly pt-2">
            <i class={`${props.icon} text-4xl`}></i>
            <span className="whitespace-nowrap">{props.title}</span>
          </div>
        </div>
      </div>
    );
}

export default OverviewItem;