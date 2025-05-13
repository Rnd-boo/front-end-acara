import {
  PAGE_DEFAULT,
  LIMIT_BANNER,
  LIMIT_EVENT,
  LIMIT_CATEGORY,
} from "@/constants/list.constants";
import bannerServices from "@/services/banner.service";
import categoryServices from "@/services/category.service";
import eventServices from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const getBanners = async () => {
    let params = `limit=${LIMIT_BANNER}&page=${PAGE_DEFAULT}`;
    const res = await bannerServices.getBanners(params);
    const { data } = res;
    return data;
  };

  const { data: dataBanners, isLoading: isLoadingBanners } = useQuery({
    queryKey: ["Banners"],
    queryFn: getBanners,
  });

  const getEvents = async (params: string) => {
    const res = await eventServices.getEvents(params);
    const { data } = res;
    return data;
  };
  const currentEventQuery = `limit=${LIMIT_EVENT}&page=${PAGE_DEFAULT}&isPublish=true`;
  const { data: dataFeaturedEvents, isLoading: isLoadingFeaturedEvents } =
    useQuery({
      queryKey: ["FeaturedEvents"],
      queryFn: () => getEvents(`${currentEventQuery}&isFeatured=true`),
    });

  const { data: dataLatestEvents, isLoading: isLoadingLatestEvents } = useQuery(
    {
      queryKey: ["LatestEvents"],
      queryFn: () => getEvents(currentEventQuery),
    },
  );

  const getCategories = async () => {
    let params = `limit=${LIMIT_CATEGORY}&page=${PAGE_DEFAULT}`;
    const res = await categoryServices.getCategories(params);
    const { data } = res;
    return data;
  };

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });
  return {
    dataBanners,
    isLoadingBanners,

    dataFeaturedEvents,
    isLoadingFeaturedEvents,
    dataLatestEvents,
    isLoadingLatestEvents,
    dataCategories,
    isLoadingCategories,
  };
};

export default useHome;
