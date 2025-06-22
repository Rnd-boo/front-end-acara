import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailTransaction from "@/components/views/Admin/DetailTransaction";

const DetailTransactionAdminPage = () => {
  return (
    <DashboardLayout
      title="DetailTransaction"
      description="Information for specific Transaction"
      type="admin"
    >
      <DetailTransaction />
    </DashboardLayout>
  );
};

export default DetailTransactionAdminPage;
