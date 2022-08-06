import { PureComponent, ReactNode } from 'react';

interface User  {
    user: {
        id: number;
        name: string;
    }
}
export class ReactKeyClass extends PureComponent<User> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: User) {
        super(props)
        this.state = {
            user: props
        };
    }
    
    componentDidMount() {
        console.log('did mount',this.props);
    }

    componentDidUpdate() {
        console.log('did update',this.props, "->", this.props);
    }

    componentWillUnmount() {
        console.log('did unmount',this.props);
    }

    render() {

        return (
            <span>sdfsdf</span>
        )
    }
}