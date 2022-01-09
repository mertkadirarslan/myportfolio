import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from "@chakra-ui/react";
import { useLanyard } from "react-use-lanyard";
import Image from "next/image";


/* Import types */
import type { Activity } from "react-use-lanyard";

/* Import data */
import userId from "../data/user";



const Status: React.FC = () => {
 
  const { loading, status } = useLanyard({
    userId,
    socket: true,
  });

  const getActivity = () => {
    if (status?.listening_to_spotify === true) {
      const { song, artist, album } = status.spotify || {};

      return {
        name: song,
        details: `by ${artist}`,
        state: `on ${album}`,
      };
    } 
  };

  const getImage = () => {
    if (!loading && status?.listening_to_spotify === true) {
      const activity = status.spotify;

      return {
        largeImage: activity?.album_art_url,
      };
    } else {
      const activity = getActivity() as Activity;

      const { application_id } = activity || {};
      const { large_image, small_image } = activity?.assets || {};

      const [largeImage, smallImage] = [
        large_image &&
          `https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png?size=256`,
        small_image &&
          `https://cdn.discordapp.com/app-assets/${application_id}/${small_image}.png?size=256`,
      ];

      return {
        largeImage,
        smallImage,
      };
    }
  };
  
  
 
 
 

 
  if (loading === false && status?.discord_status === "offline" ) 
  return  <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  marginTop={"5"} _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
   <Tooltip hasArrow label="Offline" placement="top"><Stack backgroundColor={useColorModeValue("gray.400", "gray.600")} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack></Tooltip>
  <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Offline</Text>       
</Box>

    else if (loading === false && status?.discord_status === "online" && status?.listening_to_spotify === false)
    return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  marginTop={"5"} _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
      <Stack backgroundColor={"green.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
      <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Online</Text>
    </Box> 
    );
    else if ( loading === false && status?.discord_status === "online" && status?.listening_to_spotify === true)
    return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
   <Tooltip hasArrow label="Online" placement="top"><Stack backgroundColor={"green.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip> 
  <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
  <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                 {getImage().largeImage && (
                   <Image
                     src={getImage().largeImage || ""}
                     width="80px"
                     height="80px"
                     alt="icon"
                     draggable="true"
                     objectFit="cover"
                     className="rounded-lg"
                     
                   />
                 )}
              </Stack>
              
              <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
              <h1> {getActivity()?.name}</h1>
              <h1> {getActivity()?.details}</h1>
              <h1> {getActivity()?.state} </h1>    
              </Text>
              
  </Box> 
                
          
    );
    else if (loading === false && status?.discord_status === "dnd" && status?.listening_to_spotify === false)
    return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  _hover={{ shadow: "lg" }} marginTop={"5"}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
    <Stack backgroundColor={"red.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
    <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Disturbing</Text>
  </Box> );
   else if ( loading === false && status?.discord_status === "dnd" && status?.listening_to_spotify === true)
   return (
    <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
     <Tooltip hasArrow label="Disturbing" placement="top"><Stack backgroundColor={"red.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip>
  <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
  <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                 {getImage().largeImage && (
                   <Image
                     src={getImage().largeImage || ""}
                     width="80px"
                     height="80px"
                     alt="icon"
                     draggable="true"
                     objectFit="cover"
                     className="rounded-lg"
                     
                   />
                 )}
              </Stack>
              
              <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
              <h1> {getActivity()?.name}</h1>
              <h1> {getActivity()?.details}</h1>
              <h1> {getActivity()?.state} </h1>    
              </Text>
              
  </Box> 
         
   )
  else if ( loading === false && status?.discord_status === "idle" && status?.listening_to_spotify === false)
  return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
  <Stack backgroundColor={"yellow.400"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
  <Text textColor={useColorModeValue("black", "white")} fontSize={"md"} textAlign={"center"} margin={"1"}> Idled</Text>
  </Box> 
  );
   else if ( loading === false && status?.discord_status === "idle" && status?.listening_to_spotify === true)
   return (
    <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
    <Tooltip hasArrow label="Idled" placement="top"><Stack backgroundColor={"yellow.400"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip>
  <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
  <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                 {getImage().largeImage && (
                   <Image
                     src={getImage().largeImage || ""}
                     width="80px"
                     height="80px"
                     alt="icon"
                     draggable="true"
                     objectFit="cover"
                     className="rounded-lg"
                     
                   />
                 )}
              </Stack>
              
              <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
              <h1> {getActivity()?.name}</h1>
              <h1> {getActivity()?.details}</h1>
              <h1> {getActivity()?.state} </h1>    
              </Text>
              
  </Box> 
         
   );
  else (status?.discord_status === "invisible")
  return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
  <Stack backgroundColor={useColorModeValue("gray.400", "gray.600")} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
  <Text textColor={useColorModeValue("black", "white")} fontSize={"md"} textAlign={"center"} margin={"1"}> Offline</Text>
  </Box>  );
 
};

export default Status;