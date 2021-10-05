import type { Component } from "solid-js";
import Panel from "./organisms/Panel";

import workIcon from '~/assets/icons/icon-work.svg';
import playIcon from '~/assets/icons/icon-play.svg';
import studyIcon from '~/assets/icons/icon-study.svg';
import exerciseIcon from '~/assets/icons/icon-exercise.svg';
import socialIcon from '~/assets/icons/icon-social.svg';
import selfIcon from '~/assets/icons/icon-self-care.svg';

const App: Component = () => {
  return (
    <div class='h-screen bg-navy-900 grid grid-cols-4 grid-rows-2 gap-6 p-24'>
      <div class='bg-navy-800 row-start-1 row-end-3 rounded-2xl' />
      <Panel
        icon={workIcon}
        name='Work'
        hours={42}
        hoursWeek={36}
        topColor='bg-orange-300' />
      <Panel
        icon={playIcon}
        name='Play'
        hours={10}
        hoursWeek={8}
        topColor='bg-blue-300' />
      <Panel
        icon={studyIcon}
        name='Study'
        hours={4}
        hoursWeek={7}
        topColor='bg-red-300' />
      <Panel
        icon={exerciseIcon}
        name='Exercise'
        hours={4}
        hoursWeek={5}
        topColor='bg-green-300' />
      <Panel
        icon={socialIcon}
        name='Social'
        hours={5}
        hoursWeek={10}
        topColor='bg-purple-600' />
      <Panel
        icon={selfIcon}
        name='Self Care'
        hours={2}
        hoursWeek={2}
        topColor='bg-yellow-300' />
    </div>
  );
};

export default App;
