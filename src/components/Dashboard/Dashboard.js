import * as React from "react";
import Infos from "./Infos";
import Revenues from "./widgets/Revenues";
import NbAbonnements from "./widgets/NbAbonnements";
import NbUsers from "./widgets/NbUsers";
import {useMediaQuery} from "@mui/material";
import OrderChart from "./charts/orderCharts";
import LastOrders from "./lists/lastOrders";

const styles = {
    flex: { display: 'flex', alignItems: 'center',  justifyContent: 'center'},
    flexColumn: { display: 'flex', flexDirection: 'column' },
    flexRow: { display: 'flex', flexDirection: 'row' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
    centerWidgets: { display: 'flex'}
};
const VerticalSpacer = () => <span style={{ height: '1em' }} />;
const Spacer = () => <span style={{ width: '1em' }} />;

export default () => {
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('lg')
    );

        return isXSmall ? (
            <div>
                <div style={styles.flexColumn}>
                    <Infos />
                    <Revenues />
                    <VerticalSpacer />
                    <NbAbonnements />
                    <VerticalSpacer />
                    <NbUsers />
                </div>
            </div>
        ) : isSmall ? (
            <div style={styles.flexColumn}>
                <div style={styles.singleCol}>
                    <Infos />
                </div>
                <div style={styles.flex}>
                    <Revenues />
                    <Spacer />
                    <NbAbonnements/>
                    <Spacer />
                    <NbUsers />
                </div>
                <div style={styles.singleCol}>
                    <OrderChart/>
                </div>
                <div style={styles.singleCol}>
                    <LastOrders/>
                </div>
            </div>
        ) : (
            <>
                <Infos />
                <div style={styles.flex}>
                    <div style={styles.flexColumn}>
                        <div style={styles.centerWidgets}>
                            <Revenues/>
                            <Spacer />
                            <NbAbonnements/>
                            <Spacer />
                            <NbUsers />
                        </div>
                        <div style={styles.singleCol}>
                            <OrderChart />
                        </div>
                        <div style={styles.singleCol}>
                            <LastOrders  />
                        </div>
                    </div>
                    {/*<div style={styles.rightCol}>*/}
                        {/*<div style={styles.flex}>*/}
                        {/*    <PendingReviews />*/}
                        {/*    <Spacer />*/}
                        {/*    <NewCustomers />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </>
        );

};