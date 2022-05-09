function SidebarItem (props) {
    return (
      <>
        <li className="w-full">
          <a
            href={props.link}
            className="relative flex items-center overflow-hidden rounded-xl py-1 pl-4 leading-10 duration-200 hover:bg-[#f8f8f8] hover:text-black 2xl:py-4 2xl:pl-8"
          >
            <i class={`${props.icon} pr-8 text-3xl 2xl:pr-12 2xl:text-5xl`}></i>
            <span className="font-semibold uppercase">{props.title}</span>
          </a>
        </li>
      </>
    );
}

export default SidebarItem;