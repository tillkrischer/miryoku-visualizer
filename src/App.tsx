const Button = () => {
    return (
        <div
            style={{
                height: '54px',
                width: '54px',
                borderWidth: '1px',
                borderRadius: '5px',
                backgroundColor: '#888888',
                borderStyle: 'solid',
                borderColor: '#000',
                fontSize: '12px',
                position: 'relative',
                fontWeight: 'bold',
            }}
        >
            <div
                style={{
                    top: '3px',
                    left: '5px',
                    height: '42px',
                    width: '42px',
                    borderWidth: '1px',
                    borderRadius: '3px',
                    backgroundColor: '#a7a7a7',
                    borderStyle: 'solid',
                    borderColor: 'rgba(0,0,0,0.3)',
                    position: 'absolute',
                }}
            >
                <div
                    style={{
                        left: '1px',
                        top: '1px',
                        position: 'absolute',
                    }}
                >
                    Q
                </div>
                <div
                    style={{
                        right: '1px',
                        top: '1px',
                        position: 'absolute',
                        color: '#5cfc45',
                    }}
                >
                    {'{'}
                </div>
                <div
                    style={{
                        left: '1px',
                        bottom: '1px',
                        position: 'absolute',
                        color: '#fd4526',
                    }}
                >
                    {'F12'}
                </div>
                <div
                    style={{
                        right: '1px',
                        bottom: '1px',
                        position: 'absolute',
                        color: '#4322fd',
                    }}
                >
                    {'['}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline'>Miryoku Visualizer</h1>
            <div className='h-4' />
            <Button />
        </div>
    );
};

export default App;
