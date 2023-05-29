const Button = () => {
    return (
        <div className='relative h-[54px] w-[54px] rounded-[5px] border border-black bg-[#888888] text-xs font-bold'>
            <div className='absolute left-[5px] top-[3px] h-[42px] w-[42px] rounded-[3px] border border-[rgba(0,0,0,0.3)] bg-[#a7a7a7]'>
                <div className='absolute left-[1px] top-[1px]'>Q</div>
                <div className='absolute right-[1px] top-[1px] text-green-600'>
                    {'{'}
                </div>
                <div className='absolute bottom-[1px] left-[1px] text-red-600'>
                    {'F12'}
                </div>
                <div className='absolute bottom-[1px] right-[1px] text-blue-600'>
                    {'['}
                </div>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline'>Miryoku Visualizer</h1>
            <div className='h-4' />
            <Button />
        </div>
    )
}

export default App
