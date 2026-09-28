import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";
import clsx from "clsx";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  expanded,
  onPress,
  paymentMethod,
  startDate,
  status,
}: SubscriptionCardProps) => {

  const mapData = [
    { label: "Payment:", value: paymentMethod?.trim() },
    {label: "Category:", value: category?.trim()},
    // {label: "PaymentMethod:", value: paymentMethod?.trim()},
    {label: "Started:", value: startDate ? formatSubscriptionDateTime(startDate) : ""},
    {label: "Renewal Date:", value: renewalDate ? formatSubscriptionDateTime(renewalDate) : ""},
    {label: "Status:", value: status?.trim().toLocaleUpperCase() }
  ]
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" :"bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>
            <Text numberOfLines={1} className="sub-meta" ellipsizeMode="tail">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>

        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            {mapData.map((item, index) => (
              <View key={index} className="sub-row">
                <View className="sub-row-copy">
                  <Text className="sub-label">{item.label}</Text>
                  <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                    {item.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
