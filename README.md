# COVID-19-Tracker
# John Hopkins University Covid Methodology
# Covid Tracking Project Data Methodology (https://covidtracking.com/about-data/sources)
Almost all of the data we compile is taken directly from the websites of state/territory public health authorities. When data is missing from these websites, we sometimes supplement available numbers with information from official state social media accounts or from press conferences with governors or other state authorities.

Individual state/territory data pages such as Wyoming’s, all of which are accessible from our main data page, include a link at the top of the page to the “Data sources and screenshots” for that state as well as a link to the “Notes, data anomalies, and official cautions” page for that state.

Wyoming overview links

On the state’s sources and screenshots page, the “Primary” data source link is usually the state or territory’s public health department’s coronavirus-specific response page, and additional data sources are usually coronavirus-specific data dashboards or public health department web pages. We are careful to make sure that we collect data from official state/territory sources. We began capturing timestamped images of our data source pages on March 14, 2020, and these screenshots are also available on each state’s sources and screenshots page.

Wyoming sources and screenshots

We discuss anomalies, ambiguities, warnings, and methodological changes for each state’s data on each state’s notes page. If you notice anything odd about a state’s data, this is the first place to look for an explanation.

Wyoming notes page

As we note in our FAQ, there are several reasons why The COVID Tracking Project data might not match the visible data on a state’s dashboard, including the presence of hidden data that we retrieve with a machine query, different data definitions, and time lag.

To find the precise source of a particular data point, please refer to our public spreadsheet of source notes.
Read our article ”How We Source Our Data and Why It Matters” for more information.

# New York Times Data Methodology and Definitions (https://github.com/nytimes/covid-19-data)
The data is the product of dozens of journalists working across several time zones to monitor news conferences, analyze data releases and seek clarification from public officials on how they categorize cases.

It is also a response to a fragmented American public health system in which overwhelmed public servants at the state, county and territorial level have sometimes struggled to report information accurately, consistently and speedily. On several occasions, officials have corrected information hours or days after first reporting it. At times, cases have disappeared from a local government database, or officials have moved a patient first identified in one state or county to another, often with no explanation. In those instances, which have become more common as the number of cases has grown, our team has made every effort to update the data to reflect the most current, accurate information while ensuring that every known case is counted.

When the information is available, we count patients where they are being treated, not necessarily where they live.

In most instances, the process of recording cases has been straightforward. But because of the patchwork of reporting methods for this data across more than 50 state and territorial governments and hundreds of local health departments, our journalists sometimes had to make difficult interpretations about how to count and record cases.

For those reasons, our data will in some cases not exactly match with the information reported by states and counties. Those differences include these cases: When the federal government arranged flights to the United States for Americans exposed to the coronavirus in China and Japan, our team recorded those cases in the states where the patients subsequently were treated, even though local health departments generally did not. When a resident of Florida died in Los Angeles, we recorded her death as having occurred in California rather than Florida, though officials in Florida counted her case in their own records. And when officials in some states reported new cases without immediately identifying where the patients were being treated, we attempted to add information about their locations later, once it became available.

"Probable" and “Confirmed Cases and Deaths
Cases and deaths can be reported as either “confirmed” or “probable.” Our total cases and deaths include both. The number of cases includes all cases, including those who have since recovered or died.

On April 5, the Council of State and Territorial Epidemiologists advised states to include both confirmed cases, based on confirmatory laboratory testing, and probable cases, based on specific criteria for testing, symptoms and exposure. The Centers for Disease Control adopted these definitions and national CDC data began including confirmed and probable cases on April 14.

Some governments continue to report only confirmed cases, while others are reporting both confirmed and probable numbers. And there is also another set of governments that is reporting the two types of numbers combined without providing a way to separate the confirmed from the probable.

The Geographic Exceptions section below has more details on specific areas. The methodology of individual states changes frequently.

Confirmed Cases
Confirmed cases are counts of individuals whose coronavirus infections were confirmed by a laboratory test and reported by a federal, state, territorial or local government agency. Only tests that detect viral RNA in a sample are considered confirmatory. These are often called molecular or RT-PCR tests.

Probable Cases
Probable cases count individuals who did not have a confirmed test but were evaluated by public health officials using criteria developed by states and the federal government and reported by a health department.

Public health officials consider laboratory, epidemiological, clinical and vital records evidence. Tests that detect antigens or antibodies are considered evidence towards a “probable” case, but are not sufficient on their own, according to the Council of State and Territorial Epidemiologists.

Confirmed Deaths
Confirmed deaths are individuals who have died and meet the definition for a confirmed Covid-19 case. Some states reconcile these records with death certificates to remove deaths from their count where Covid-19 is not listed as the cause of death. We follow health departments in removing non-Covid-19 deaths among confirmed cases when we have information to unambiguously know the deaths were not due to Covid-19, i.e. in cases of homicide, suicide, car crash or drug overdose.

“Probable” Deaths
Probable deaths are deaths where Covid-19 is listed on the death certificate as the cause of death or a significant contributing condition, but where there has been no positive confirmatory laboratory test.

Deaths among probable cases tracked by a state or local health department where a death certificate has not yet been filed may also be counted as a probable death.

For more on how states count confirmed and probable deaths, see this article.

Dates
For each date, we show the cumulative number of confirmed cases and deaths as reported that day in that county or state. All cases and deaths are counted on the date they are first announced.

Each date includes all cases and deaths announced that day through midnight Eastern Time. As the West Coast and Hawaii tend to release all of their new data early enough in the day.

Declining Counts
In some cases, the number of cases or deaths for a state or county will decline. This can occur when a state or county corrects an error in the number of cases or deaths they've reported in the past, or when a state moves cases from one county to another. When we are able, we will historically revise counts for all impacted dates. In other cases, this will be reflected in a single-day drop in the number of cases or deaths.

Counties
In some instances, we report data from multiple counties or other non-county geographies as a single county. For instance, we report a single value for New York City, comprising the cases for New York, Kings, Queens, Bronx and Richmond Counties. In these instances the FIPS code field will be empty. (We may assign FIPS codes to these geographies in the future.) See the list of geographic exceptions.

Cities like St. Louis and Baltimore that are administered separately from an adjacent county of the same name are counted separately.

“Unknown” Counties
Many state health departments choose to report cases separately when the patient’s county of residence is unknown or pending determination. In these instances, we record the county name as “Unknown.” As more information about these cases becomes available, the cumulative number of cases in “Unknown” counties may fluctuate.

Sometimes, cases are first reported in one county and then moved to another county. As a result, the cumulative number of cases may change for a given county.
