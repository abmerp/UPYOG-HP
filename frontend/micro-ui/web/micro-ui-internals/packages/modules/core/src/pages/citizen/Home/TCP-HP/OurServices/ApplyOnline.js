import CitizenAndOthers from "./CitizenandOther"
import PrivateProfessionals from "./PrivateProfessionals"
import Promoters from "./Promoters"

const ApplyOnline = () => {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
        <PrivateProfessionals />
        <Promoters />
        <CitizenAndOthers />
        </div>
        </>
    )
}

export default ApplyOnline