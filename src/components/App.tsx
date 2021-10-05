import { Component } from "solid-js";
import Panel from "./organisms/Panel";
import TitlePanel from "~/components/organisms/TitlePanel";

import workIcon from '~/assets/icons/icon-work.svg';
import playIcon from '~/assets/icons/icon-play.svg';
import studyIcon from '~/assets/icons/icon-study.svg';
import exerciseIcon from '~/assets/icons/icon-exercise.svg';
import socialIcon from '~/assets/icons/icon-social.svg';
import selfIcon from '~/assets/icons/icon-self-care.svg';
import personIcon from '~/assets/images/image-jeremy.png';
import { createSignal } from "solid-js";

const createPanel = (name: string, topColor: string, icon: string) => ({ name, topColor, icon })

const panelsData = [
  createPanel('Work', 'bg-orange-300', workIcon),
  createPanel('Play', 'bg-blue-300', playIcon),
  createPanel('Study', 'bg-red-300', studyIcon),
  createPanel('Exercise', 'bg-green-300', exerciseIcon),
  createPanel('Social', 'bg-purple-600', socialIcon),
  createPanel('Self Care', 'bg-yellow-300', selfIcon),
]

const hours: Record<string, Record<string, [number, number]>> = {
  Work: {
    Daily: [5, 7],
    Weekly: [32, 36],
    Monthly: [103, 128],
  },
  Play: {
    Daily: [1, 2],
    Weekly: [10, 8],
    Monthly: [23, 29],
  },
  Study: {
    Daily: [0, 4],
    Weekly: [7, 13],
    Monthly: [19, 1],
  },
  Exercise: {
    Daily: [1, 4],
    Weekly: [5, 11],
    Monthly: [18, 1],
  },
  Social: {
    Daily: [3, 5],
    Weekly: [10, 21],
    Monthly: [23, 0],
  },
  'Self Care': {
    Daily: [1, 2],
    Weekly: [2, 7],
    Monthly: [11, 12],
  },
}

const lyToNormal: Record<string, string> = {
  Daily: 'Day',
  Weekly: 'Week',
  Monthly: 'Month',
}

const App: Component = () => {
  const [intervalType, setIntervalType] = createSignal('Weekly');

  return (
    <div class='h-screen bg-navy-900 grid grid-cols-4 grid-rows-2 gap-6 p-24'>
      <TitlePanel selected={intervalType} setSelected={setIntervalType} name='Jeremy Robson' image={personIcon} />
      {
        panelsData.map(
          props => {
            const [now, last] = hours[props.name][intervalType()]
            return <Panel {...props} hoursLast={last} hours={now} interval={lyToNormal[intervalType()]} />
          }
        )
      }
    </div>
  );
};

export default App;
