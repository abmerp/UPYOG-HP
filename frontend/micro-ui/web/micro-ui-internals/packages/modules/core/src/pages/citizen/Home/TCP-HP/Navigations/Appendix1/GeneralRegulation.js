import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@material-ui/core";


const rows = [
    { slNo: 1, description: "Minimum width of pedestrian links to smaller cluster of plots, not exceeding 5 in number.", pdfUrl: "3.00 M." },
    { slNo: 2, description: "Minimum width of vehicular access, if number of plots is above 5.", pdfUrl: " 5.00 M (with cul-de-sac) at the end." },
    { slNo: 3, description: "Minimum area for open/green space for the scheme having more than 5 plots.", pdfUrl: "10%" },
    { slNo: 4, description: "Minimum area for soak pit etc. (irrespective of number of plots)", pdfUrl: "5% of the scheme area" },
    { slNo: 5, description: "Orientation of the plots shall be provided in such a manner so as to be in conformity with the integration of existing plots/infrastructure, wind direction, natural flow of surface drainage to allow un-obstructed rain water discharge.", pdfUrl: "---" },
    { slNo: 6, description: "Layout of plots shall be governed by easy access having acceptable grades minimum 1in 15 and which may not obstruct view or vista.", pdfUrl: "---" },
  ];

export default function GeneralRegulation (){
    return(
        <>  
        <div style={{margin: '20px'}}>
            <p><strong>General Regulation</strong></p>
            <p>The following provoisions shall be applicable where no specific mention is made namely</p>
            <ol>
	            <li>Every plot should abut with path having 3.00 Meter width. In case the width is on lesser side, the applicant has to surrender land to make it 3.00 Metre wide.</li>
	            <li>The height of a building shall further be related to the width of abutting path:</li>
            </ol>
            <p>For path less than 3.0M and non-vehicular&nbsp;&nbsp;&nbsp; :-&nbsp; 10 Metres</p>
            <p>For path less than 3.0M but vehicular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp; 13 Metres</p>
            <p>For path between 3.0M to 5.00M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp; 13 Metres</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Maximum acceptable slope for development shall be 45 degrees.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 4.&nbsp; Maximum height of plinth level shall be 2.00 Meters.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 5.One parking floor shall be mandatory wherever feasible. Maximum height of parking floor shall be 3.00 Metres for residential use and 4.00 Metres for other uses. Shear walls shall be constructed on all the</p><p>&nbsp;&nbsp;&nbsp;&nbsp; 5.One parking floor shall be mandatory wherever feasible. Maximum height of parking floor shall be 3.00 Metres for residential use and 4.00 Metres for other uses. Shear walls shall be constructed on all the</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; three sides&nbsp;&nbsp; of parking floor, so that it does not behave as a soft storey.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 6.In case, space as per requirement for parking is available in open, over and above the set backs, condition of parking floor shall not be insisted. The closed floors in a building at any level, if proposed and</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; feasible for parking may be converted into parking floors. However, only one parking floor shall be exempt from Floor Area Ratio (FAR), subject to the height of building restriction and structural stability.</p>
            <p>Though, one parking floor is mandatory yet second parking floor can be constructed which will be optional. Here too only one parking floor shall be exempt from Floor Area Ratio (FAR), subject to the height of building restriction and structural stability.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fee for parking floor(s) shall have to be payable in all cases.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Every room used or intended to be used for the purpose of an office or for habitation in any building shall have a height of minimum 2.75Meters and maximum 3.50 Meters measured from the surface of floor to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lowest point of the&nbsp; ceiling (bottom of slab). The chimneys, elevators, poles, tanks and other projections not used for human occupancy may extend above the prescribed height limits. The cornices and window sills may also project into any required Set Backs.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Sloping roof shall be mandatory in hill areas (As per the URDPFI Guidelines, 2014 and National Building Code, 2005 hilly areas is any area above 600 m in height from mean sea level, or any area with average slope of 30°)which may be CGI, GI sheet or slate roof with facia.</p>
            <ol>
	            <li>The roof shall be painted with post office red or forest green or natural roofing material such as slates. Height of sloping roof zero at eaves and maximum <strong>2.75</strong> Metres at centre shall be permissible. The Dormer at suitable distance on either side of the roof shall be permissible subject to the condition that the ridge of Dormer shall be below the ridge line of main roof.</li>
	            <li>Roof top @ 12 M<sup>2 </sup>per 1 Kilo Watt peak (KWp) shall be used for Solar Photovoltaic (PV) installations.</li>
            </ol>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Set Backs:-</p>
            <ol>
	            <li>Minimum front Set Backs from the line of controlled width of Highways and Himachal Pradesh Public Works Department’s scheduled roads falling within the Planning Area /Special Area limits (excluding the land, included in the inhabited sites of a village as entered and demarcated in the Revenue record or on sites in notified Municipal or town area that are already built up) shall be 3.00Metres.</li>
	            <li>Minimum front Set Back from non-scheduled roads and Municipal roads shall be 3.00 Metres.</li>
	            <li>Every building should have a clear means of access there to from a street or road. The competent authority may require the provisions of an access lane or access road within the site of any new building. Where for the purpose of this Regulation, it is necessary to determine the width of any road or street, the same shall be determined by the competent authority.</li>
            </ol>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10. For the plots abutting Highways, Bye-pass and Himachal Pradesh Public Works Department’s scheduled roads, No Objection Certificate (NOC) from the Himachal Pradesh Public Works Department shall be mandatory in the cases where plot is directly abutting to these roads and there is direct access through connecting bridge and by constructing ramps to such roads.</p>
            <p>11.&nbsp; Maximum hill cut of 3.50 Metre height shall be permissible. No building shall be built to abut against an earth cutting&nbsp;&nbsp; including a toe wall supporting an earth cutting and minimum 1.00 Metre distance shall be maintained between building and toe wall etc.</p>
            <p>12. Issuance of No Objection Certificate (NOC) for water supply and electricity and sewerage connection:-</p>
                        <table border="1" cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <td>
                        <ol>
                            <li>&nbsp;</li>
                        </ol>
                        </td>
                        <td>
                        <p>&nbsp;Temporary</p>
                        </td>
                        <td>
                        <p>At plinth level</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <ol>
                            <li>&nbsp;</li>
                        </ol>
                        </td>
                        <td>
                        <p>&nbsp;Permanent</p>
                        </td>
                        <td>
                        <p>On completion of dwelling unit /floor /whole building.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13.&nbsp; Any subsequent deviations made in the building constructed after getting the plan approved and after grant of No Objection Certificate (NOC) issued by the Department shall entail the entire building unauthorized and NOC so issued shall be withdrawn and the services shall be disconnected.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14. Adequate distance from the electric lines as per the requirement of Himachal Pradesh State Electricity Board Limited (HPSEB Ltd.) Rules shall have to be maintained. The No Objection Certificate (NOC) of the competent authority shall also be required, if HT/LT line is crossing through the site.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15. Minimum permissible distance between two Blocks constructed on a plot shall be 5.00 Metres.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16. The construction shall be allowed at distance of 3.00 Metre and 5.00 Metre from Nullah and Khud respectively.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17. No residential building shall be permissible on land having buildable width less than 5.00 Metres after leaving Set Backs.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18. No construction shall be allowed within a radius of 2.00 Metre from the existing tree and 5.00 Metres from the Forest boundary measured from the circumference of an existing tree.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19. Construction on sandwiched plots in Bazaar area shall be permissible for shops as per existing building lines, only in existing built up areas.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20. In new sub-division of land :-</p>

            <TableContainer component={Paper}>
      <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.slNo}>
              <TableCell component="th" scope="row">
                {row.slNo}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.pdfUrl}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            <p>&nbsp;&nbsp; 21. Permissible Area Standard/Norms for different parts of a Building shall be as under:-</p>
            <TableContainer component={Paper}>
              <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>  
               <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
               Habitable Room
              </TableCell>
              <TableCell>
                <p>Minimum floor area</p>
                <p>Minimum width</p>
              </TableCell>
              <TableCell>
                <p>9.50 M^2</p>
                <p>2.40 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Kitchen
              </TableCell>
              <TableCell>
                <p>Minimum floor area</p>
                <p>Minimum width</p>
              </TableCell>
              <TableCell>
                <p>4.50 M^2</p>
                <p>1.80 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Bath Room
              </TableCell>
              <TableCell>
                <p>Minimum floor area</p>
                <p>Minimum width</p>
              </TableCell>
              <TableCell>
                <p>1.80 M^2</p>
                <p>1.20 M</p>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
               Water Closet
              </TableCell>
              <TableCell>
                <p>Minimum floor area</p>
                <p>Minimum width</p>
              </TableCell>
              <TableCell>
                <p>1.10 M^2</p>
                <p>.90 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               <p>Toilet</p>
               <p>(WC+Bath)</p>
              </TableCell>
              <TableCell>
                <p>Minimum floor area</p>
                <p>Minimum width</p>
              </TableCell>
              <TableCell>
                <p>2.30 M^2</p>
                <p>1.20 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Minimum width of corridor
              </TableCell>
              <TableCell>
                <p>For Resedential Use</p>
                <p>For Other Use</p>
              </TableCell>
              <TableCell>
                <p>1.00 M</p>
                <p>1.20 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Minimum width of stairs
              </TableCell>
              <TableCell>
                <p>For Resedential Use</p>
                <p>For Other Use</p>
              </TableCell>
              <TableCell>
                <p>1.00 M</p>
                <p>1.50 M</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Minimum width of treads without nosing
              </TableCell>
              <TableCell>
                <p>For Resedential Use</p>
                <p>For Other Use</p>
              </TableCell>
              <TableCell>
                <p>25 Centimeter wide for internal stairs</p>
                <p>30 Centimeter wide for internal stairs case </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Maximum height of riser
              </TableCell>
              <TableCell>
                <p>For Resedential Use</p>
                <p>For Other Use</p>
              </TableCell>
              <TableCell>
                <p>19 Centimeter</p>
                <p>15 Centimeter</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Provison of spiral stair case
              </TableCell>
              <TableCell>
                For Other uses except Resedential use
              </TableCell>
              <TableCell>
              Provision of spiral stair case not less than 1.50 Metre dia with adequate head height for fire escape in addition to regular stair case
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Openings
              </TableCell>
              <TableCell>
              For sufficient air and light, windows and ventilators should have minimum area equivalent to 1/6th Floor Area
              </TableCell>
              <TableCell component="th" scope="row">
              ---
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Projections over doors, windows and ventilators.
              </TableCell>
              <TableCell>
               .60 M
              </TableCell>
              <TableCell>
                ---
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              Balcony Projections
              </TableCell>
              <TableCell>
              1.20 M wide Balcony complete open on two sides with restriction of 50 % of building frontage where minimum front Set Back is 3.00 M shall be permissible.
              </TableCell>
              <TableCell component="th" scope="row">
                ---
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22. The habitable basement and attic shall be counted as independent storey.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23. The Apartments and Colonies shall be dealt with as per Regulations contained in Appendix-7<strong>.</strong> The powers for Registration of Promoters / Estate Agents and powers for issuance of Licences shall vest with the Director (TCP) only and none other authorities.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24. Though minimum area of plot has been defined in Regulation II, yet the plots allotted by the Central or State Government under various Social Housing Schemes including Gandhi Kutir Yojana, Indira Awas Yojana, Rajiv Awas Yojana, Affordable Housing Schemes, launched by the Central or State Government, may be considered and permission accorded in relaxation of Regulations. However, the minimum area of plot for the persons belonging to the Economically Weaker Sections and Low Income Groups of society should not be less than 45 M<sup>2 </sup>and 80 M<sup>2 </sup>respectively.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25. Service floor wherever proposed for installation of plumbing and other services and to maintain the hygiene of habitable area in case of Commercial/ Shopping Complex and Tourism Unit. Service floor, wherever proposed shall have height restriction of 2.10 Metres and this floor shall not be counted in the FAR. However, the overall height restriction of building will remain the same.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26. Re-construction of existing buildings:-</p>
            <p>Regulations regarding re-construction of houses/ buildings in the existence shall be on predominantly existing building lines, provided minimum width of roadas per Rules is available and roof projections, sun shades shall be permitted over streets or paths, as the case may be.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26. Re-construction of existing buildings:-</p>
            <p>Regulations regarding re-construction of houses/ buildings in the existence shall be on predominantly existing building lines, provided minimum width of roadas per Rules is available and roof projections, sun shades shall be permitted over streets or paths, as the case may be.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27. Change of Land Use:-</p>
            <p>Change of existing land use for Residential<strong>,</strong> Commercial, Public and semi-public and Industrial, shall be on existing pattern of development and site conditions subject to the conditions that where basic services like paved roads, drainage, water supply, sewerage disposal, electrical supply line, street lighting etc. do not exist, change of land use or development of land shall not be permitted unless the applicant undertakes that these services shall be provided at his own cost.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28. Relaxation in set backs, height of floors and building may be allowed in case of Government projects in the public interest. However, in case of private construction, relaxation in set backs and height of floors only may be considered by the Competent Authority keeping in view of site condition.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 29. In case of any clarification with reference to any proviso or if there is no any specific provision, the provisions as envisaged in the Urban and Regional Development Plans Formulation and&nbsp; Implementation Guidelines, 2014 of the Government of India or the National Building Code of India,2005shall have to be adhered to.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30. Firefighting provisions and specification shall be as per National Building Code of India, 2005<strong>.</strong></p>
            </div>
        </>

    )
}