import type { Component } from "solid-js";

interface PanelProps {
  topColor: string
  name: string,
  hours: number
  hoursLast: number
  icon?: string
  interval: string
}

const getHours = (hours) => `${hours}hr${hours != 1 ? 's' : ''}`

const Panel: Component<PanelProps> = ({ topColor, name, hours,  hoursLast, icon, interval }) => {

  return (
    <div class='relative text-white'>
      <div class={`${topColor} h-[30%] rounded-2xl flex justify-end pr-4`}>
        <img src={icon} alt=""/>
      </div>
      <div class='absolute bottom-0 h-[80%] w-[100%] bg-navy-800 rounded-2xl p-6'>
        <div class='flex justify-between mb-6'>
          <span>{name}</span>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
          </svg>
        </div>
        <h1 class='text-5xl'>{getHours(hours)}</h1>
        <div class='text-sm mt-2 text-gray-300'>
          Last {interval} - {getHours(hoursLast)}
        </div>
      </div>
    </div>
  );
};

export default Panel;