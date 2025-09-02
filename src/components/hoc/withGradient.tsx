import AppSafeAreaView from "../AppSafeAreaView";
import { GradientBackground } from "../GradientBackground";

export const withGradient = <P extends object>(
    Component: React.ComponentType<P>
) => (props: P) => (
    <GradientBackground>
        <AppSafeAreaView>
            <Component {...props} />
        </AppSafeAreaView>
    </GradientBackground>
);
