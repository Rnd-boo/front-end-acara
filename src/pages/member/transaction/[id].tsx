import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailTransaction from "@/components/views/Member/DetailTransaction";

const DetailTransactionMemberPage = () => {
  return (
    <DashboardLayout
      title="DetailTransaction"
      description="Information for specific Transaction"
      type="member"
    >
      <DetailTransaction />
    </DashboardLayout>
  );
};

export default DetailTransactionMemberPage;
