import AppSafeAreaView from "../AppSafeAreaView";
import { GradientBackground } from "../GradientBackground";

export const withGradientSafeArea = <P extends object>(
    Component: React.ComponentType<P>
) => (props: P) => (
    <GradientBackground>
        <AppSafeAreaView>
            <Component {...props} />
        </AppSafeAreaView>
    </GradientBackground>
);


