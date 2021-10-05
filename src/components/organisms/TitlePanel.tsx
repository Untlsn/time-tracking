import { Accessor, Component } from "solid-js";

interface TitlePanelProps {
  image: string,
  name: string
  setSelected(str: string): void
  selected: Accessor<string>
}

const TitlePanel: Component<TitlePanelProps> = ({ image, name, selected, setSelected }) => {
  return (
    <div class='bg-navy-800 row-start-1 row-end-3 rounded-2xl text-white'>
      <div class='h-[70%] bg-indigo-500 rounded-2xl px-6 py-10'>
        <img src={image} alt="" class='rounded-full border-solid border-2 border-white h-18 mb-8'/>
        <span class='text-sm text-gray-300'>Report for</span>
        <h1 class='text-4xl'>{name}</h1>
      </div>
      <div class='flex flex-col items-start justify-evenly px-6 py-2 h-[30%]'>
        {
          ['Daily', 'Weekly', 'Monthly'].map(
            name => (
              <button
                onClick={() => setSelected(name)}
                class={`${name != selected() && 'text-gray-500'} focus:outline-none`}>
                {name}
              </button>
            )
          )
        }
      </div>
    </div>
  );
};

export default TitlePanel;