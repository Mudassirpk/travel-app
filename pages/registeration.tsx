import Head from 'next/head';

import UserLogReg from './../components/Registeration/UserLogReg'

export default function Registeration(){

	return(
	<div>
	<Head>
        <title>TravelBook</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
    <main className='w-full h-[100vh]'>
    	<UserLogReg />
    </main>
    </div>
		)

}
